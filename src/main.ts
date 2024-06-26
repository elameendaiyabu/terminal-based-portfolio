import "./style.css";
import { caretFocus, handleSubmit } from "./utils";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="text-[#B1B9D9] text-lg leading-9">
	<p>Welcome to my terminal based portfolio.</p>
	<p>----------</p>
	<p>This project's source code can be found <a class="text-[#A6D599] underline" href="">here</a></p>
	<p>For a list of all available commands, type <span class="text-[#E6CDA0]">"help"</span></p>
	<p>----------</p>

	<div id="output"></div>

	<div class="flex gap-2">
		<div>
			<span class="text-[#E6CDA0]">user</span>
			@
			<span class="text-[#A6D599]">elameendaiyabu.dev</span> : ~>

		</div>
		<form class="form">
			<input id="term-value" autofocus autocomplete="off" spellcheck="false" autocapitalize="none" type="text" class="border-[#25273A] placeholder-opacity-0 bg-[#25273C] w-[720px] focus:border-[#25273A] caret-[#E5CDA0] focus:ring-offset-[#25273A] outline ring border outline-offset-0 outline-[#25273A] text-[#E6CDA0]" />
		</form>
	</div>


</div>
`;

caretFocus(document.querySelector<HTMLInputElement>("#term-value")!);

handleSubmit(
  document.querySelector<HTMLFormElement>("form")!,
  document.querySelector<HTMLInputElement>("#term-value")!,
);
