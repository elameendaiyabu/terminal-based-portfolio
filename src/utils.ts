export function handleSubmit(
  element: HTMLFormElement,
  value: HTMLInputElement,
) {
  element.addEventListener("submit", (e) => {
    e.preventDefault();

    const termValue = value!.value;
    console.log(termValue);
  });
}
