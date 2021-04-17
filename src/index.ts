import { greaterOrEqual, validate } from "../../validator/dist";

class Test {
  
  @validate
  static successful(@greaterOrEqual(4) num: number): void {
    console.log(num);
  }

  @validate
  static notSuccessful(@greaterOrEqual(4) num: number): void {
    console.log(num);
  }
}

Test.successful(5); // should print 5
Test.successful(3); // should NOT anything