import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const pwd = 'pwd'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg, pwd }
    });
    expect(wrapper.text()).toMatch(msg);
    console.log("wrapper.text()", wrapper.text())
  });
});
