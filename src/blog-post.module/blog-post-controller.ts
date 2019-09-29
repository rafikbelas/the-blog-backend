import {
  Controller,
  Get,
  Post,
  Body,
  NotFoundException,
  Param,
  Req,
  UseGuards
} from "@nestjs/common";
import { ApiModelProperty, ApiResponse } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { IsAuthenticatedGuard } from "../auth.module/is-authenticated-guard";
import { getUserById } from "../auth.module/okta-client";
import { User } from "../user.module/user-controller";

export class BlogPost {
  @ApiModelProperty() // Used to generate Swagger documentation that `BlogPost` model contains id of type number.
  id: number;

  @ApiModelProperty()
  authorId: string;

  @ApiModelProperty()
  title: string;

  @ApiModelProperty()
  content: string;
}

export class BlogPostDto {
  @ApiModelProperty()
  @IsNotEmpty()
  title: string;

  @ApiModelProperty()
  @IsNotEmpty()
  content: string;
}

export const blogPosts = new Array<BlogPost>();

@Controller("blog-posts")
export default class BlogPostController {
  @Get() // Registers a `blog-post` GET method on the API.
  @ApiResponse({ type: BlogPost, status: 200, isArray: true }) // For Swagger documentation: API returns an array of BlogPost models.
  findAll(): Array<BlogPost> {
    return blogPosts;
  }

  @Post()
  @ApiResponse({ type: BlogPost, status: 201 })
  @UseGuards(IsAuthenticatedGuard)
  create(@Body() blogPostDto: BlogPostDto, @Req() req): BlogPost {
    const { content, title } = blogPostDto;
    const id = blogPosts.length + 1;
    const { userId } = req["auth"];

    const newBlogPost: BlogPost = { id, title, content, authorId: userId };
    blogPosts.push(newBlogPost);

    return newBlogPost;
  }

  @Get(":id/author")
  async findAuthor(@Param("id") blogPostId: string): Promise<User> {
    const blog = blogPosts.find(post => post.id.toString() === blogPostId);
    if (!blog) {
      throw new NotFoundException("No such blog post.");
    }

    return await getUserById(blog.authorId);
  }
}
