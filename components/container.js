import { cx } from "@/utils/all";

export default function Container(props) {
  return (
    <div
      className={cx(
        "container px-8 mx-auto xl:px-5",
        props.large ? " max-w-screen-6xl" : " max-w-screen-4xl",
        !props.alt && " py-3 lg:py-5",
        props.className
      )}>
      {props.children}
    </div>
  );
}
