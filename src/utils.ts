import { terminalCommand } from "./commands";

export function handleSubmit(form: HTMLFormElement, input: HTMLInputElement) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const command: string = input.value.trim();

    if (!command) {
      appendOutput(command, true);
    } else {
      appendOutput(command, true);

      const output = terminalCommand(command);
      appendOutput(output, false);
    }

    input.value = "";
    input.focus();

    scrollToBottom();
    pageScroll();
  });
}

function appendOutput(text: string, cmdLine: boolean = false) {
  const outputDiv = document.createElement("div");

  if (cmdLine) {
    outputDiv!.innerHTML = `
    		<div class="text-[#E6CDA0]">
			<span class="text-[#E6CDA0]">user</span>
			<span class="text-[#b1b9d9]">@</span>
			<span class="text-[#A6D599]">elameendaiyabu.dev</span> : ~>${text}

		</div>
`;
  } else {
    outputDiv!.innerHTML = `
                <p class="text-[#FAC9F2] mb-2">${text}</p>
`;
  }

  document.querySelector<HTMLDivElement>("#output")!.appendChild(outputDiv);
  scrollToBottom();
  pageScroll();
}

export function scrollToBottom() {
  const appDiv = document.getElementById("main")!;
  appDiv.scrollTop = appDiv.scrollHeight;
  pageScroll();
}

function pageScroll() {
  window.scrollBy(0, 50); // horizontal and vertical scroll increments
}

export function caretFocus(value: HTMLInputElement) {
  document.addEventListener("DOMContentLoaded", function () {
    value!.focus();

    document.addEventListener("mouseup", function () {
      value!.focus();
    });
  });
}
