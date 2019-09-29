import { Controller, Get } from "@nestjs/common";
import { ApiModelProperty, ApiResponse } from "@nestjs/swagger";

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

export const blogPosts = [
  {
    id: 1,
    authorId: "xxx",
    title: "Build a NodeJS app with TypeScript",
    content: "Whats wrong with JavaScript?"
  },
  {
    id: 2,
    authorId: "yyy",
    title: "D'ont build a NodeJS app with TypeScript",
    content: "Whats wrong with TypeScript?"
  },
  {
    id: 3,
    authorId: "zzz",
    title: "Build a Java app with Spring Boot",
    content: "Whats wrong with J2EE?"
  }
];

@Controller("blog-posts")
export default class BlogPostController {
  @Get() // Registers a `blog-post` GET method on the API.
  @ApiResponse({ type: BlogPost, status: 200, isArray: true }) // For Swagger documentation: API returns an array of BlogPost models.
  findAll(): Array<BlogPost> {
    return blogPosts;
  }
}
