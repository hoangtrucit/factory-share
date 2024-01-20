import * as ProtoLoader from "@grpc/proto-loader";
import * as GRPC from "@grpc/grpc-js";

describe("GRPC User Service V1", () => {
  let protoGRPC: any;

  beforeEach(async () => {
    // Load proto-buffers for test gRPC dispatch
    const proto = ProtoLoader.loadSync([
      // base
      "./src/app/payment/base/user/v1/user.proto",

      // service
      "./src/app/payment/user/service/v1/user.proto",
    ]) as unknown;

    // Create Raw gRPC client object
    protoGRPC = GRPC.loadPackageDefinition(proto as any) as any;
  });

  it("should exists these methods getUsers", () => {
    const client = new protoGRPC.app.payment.user.service.v1.UserService(
      "localhost:5000",
      GRPC.credentials.createInsecure()
    );
    expect(typeof client.getUsers).toBe("function");
  });

  it("should exists these methods createUser", () => {
    const client = new protoGRPC.app.payment.user.service.v1.UserService(
      "localhost:5000",
      GRPC.credentials.createInsecure()
    );
    expect(typeof client.createUser).toBe("function");
  });

  afterAll(async () => {
    //
  });
});
