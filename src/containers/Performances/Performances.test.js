import React from "react";
import Performances from "./Performances";
import { shallow } from "enzyme";

describe("<Performances />", () => {
  it ("creates component without crashing", () => {
    const performances = <Performances />;
  });

  it("contains the text Performances", () => {
    const performancesWrapper = shallow(<Performances />);
    expect(performancesWrapper.text()).toEqual("Performances");
  })
});
