# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [app/payment/base/user/v1/user.proto](#app_payment_base_user_v1_user-proto)
    - [UserModel](#app-payment-base-user-v1-UserModel)
  
- [app/payment/user/service/v1/user.proto](#app_payment_user_service_v1_user-proto)
    - [CreateUserRequest](#app-payment-user-service-v1-CreateUserRequest)
    - [CreateUserResponse](#app-payment-user-service-v1-CreateUserResponse)
    - [GetUsersRequest](#app-payment-user-service-v1-GetUsersRequest)
    - [GetUsersResponse](#app-payment-user-service-v1-GetUsersResponse)
  
    - [UserService](#app-payment-user-service-v1-UserService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="app_payment_base_user_v1_user-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## app/payment/base/user/v1/user.proto



<a name="app-payment-base-user-v1-UserModel"></a>

### UserModel
User information


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | The id |
| user_name | [string](#string) |  | The user name |
| email | [string](#string) |  | The email |





 

 

 

 



<a name="app_payment_user_service_v1_user-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## app/payment/user/service/v1/user.proto



<a name="app-payment-user-service-v1-CreateUserRequest"></a>

### CreateUserRequest
Request message for `UserService.CreateUser`.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_name | [string](#string) |  | The user name |
| email | [string](#string) |  | The email |






<a name="app-payment-user-service-v1-CreateUserResponse"></a>

### CreateUserResponse
Response message for `UserService.CreateUser`.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | The user id |






<a name="app-payment-user-service-v1-GetUsersRequest"></a>

### GetUsersRequest
Request message for `UserService.GetUsers`.






<a name="app-payment-user-service-v1-GetUsersResponse"></a>

### GetUsersResponse
Response message for `UserService.GetUsers`.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| users | [app.payment.base.user.v1.UserModel](#app-payment-base-user-v1-UserModel) | repeated | The user information list |





 

 

 


<a name="app-payment-user-service-v1-UserService"></a>

### UserService
User Service

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetUsers | [GetUsersRequest](#app-payment-user-service-v1-GetUsersRequest) | [GetUsersResponse](#app-payment-user-service-v1-GetUsersResponse) | Get GetUsers Request: { }

Response: { &#34;users&#34;: [ { &#34;id&#34;: &#34;id&#34;, &#34;userName&#34;: &#34;user name&#34;, &#34;email&#34;: &#34;user@email.com&#34; } ] } |
| CreateUser | [CreateUserRequest](#app-payment-user-service-v1-CreateUserRequest) | [CreateUserResponse](#app-payment-user-service-v1-CreateUserResponse) | Create User Request: { &#34;userName&#34;: &#34;user name&#34;, &#34;email&#34;: &#34;user@email.com&#34; }

Response: { &#34;id&#34;: &#34;id&#34; } |

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

