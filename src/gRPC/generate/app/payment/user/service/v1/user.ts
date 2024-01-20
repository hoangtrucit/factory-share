/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { UserModel } from "../../../base/user/v1/user";

/** Request message for `UserService.GetUsers`. */
export interface GetUsersRequest {
}

/** Response message for `UserService.GetUsers`. */
export interface GetUsersResponse {
  /** The user information list */
  users: UserModel[];
}

/** Request message for `UserService.CreateUser`. */
export interface CreateUserRequest {
  /** The user name */
  userName: string;
  /** The email */
  email: string;
}

/** Response message for `UserService.CreateUser`. */
export interface CreateUserResponse {
  /** The user id */
  id: string;
}

/** User Service */

export interface UserServiceClient {
  /**
   * Get GetUsers
   * Request:
   * {
   * }
   *
   * Response:
   * {
   * "users": [
   * {
   * "id": "id",
   * "userName": "user name",
   * "email": "user@email.com"
   * }
   * ]
   * }
   */

  getUsers(request: GetUsersRequest, metadata?: Metadata): Observable<GetUsersResponse>;

  /**
   * Create User
   * Request:
   * {
   * "userName": "user name",
   * "email": "user@email.com"
   * }
   *
   * Response:
   * {
   * "id": "id"
   * }
   */

  createUser(request: CreateUserRequest, metadata?: Metadata): Observable<CreateUserResponse>;
}

/** User Service */

export interface UserServiceController {
  /**
   * Get GetUsers
   * Request:
   * {
   * }
   *
   * Response:
   * {
   * "users": [
   * {
   * "id": "id",
   * "userName": "user name",
   * "email": "user@email.com"
   * }
   * ]
   * }
   */

  getUsers(
    request: GetUsersRequest,
    metadata?: Metadata,
  ): Promise<GetUsersResponse> | Observable<GetUsersResponse> | GetUsersResponse;

  /**
   * Create User
   * Request:
   * {
   * "userName": "user name",
   * "email": "user@email.com"
   * }
   *
   * Response:
   * {
   * "id": "id"
   * }
   */

  createUser(
    request: CreateUserRequest,
    metadata?: Metadata,
  ): Promise<CreateUserResponse> | Observable<CreateUserResponse> | CreateUserResponse;
}

export function UserServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getUsers", "createUser"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const USER_SERVICE_NAME = "UserService";
