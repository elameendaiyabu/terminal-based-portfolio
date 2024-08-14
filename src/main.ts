import "./style.css";
import { caretFocus, handleSubmit } from "./utils";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="text-[#B1B9D9] overflow-hidden text-md font-extrabold">
	<p>Welcome to my terminal based portfolio.</p>
	<p>----------</p>
	<p>This project's source code can be found <a class="text-[#A6D599] underline" href="https://github.com/elameendaiyabu/terminal-based-portfolio" target="_blank">here</a></p>
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
--- Startup times for process: Primary/TUI ---

times in msec
 clock   self+sourced   self:  sourced script
 clock   elapsed:              other lines

000.002  000.002: --- NVIM STARTING ---
000.134  000.133: event init
000.211  000.076: early init
000.242  000.031: locale set
000.278  000.036: init first window
000.565  000.287: inits 1
000.574  000.009: window checked
000.576  000.003: parsing arguments
001.085  000.041  000.041: require('vim.shared')
001.170  000.044  000.044: require('vim.inspect')
001.224  000.039  000.039: require('vim._options')
001.225  000.137  000.054: require('vim._editor')
001.227  000.228  000.050: require('vim._init_packages')
001.229  000.424: init lua interpreter
001.703  000.474: --- NVIM STARTED ---

--- Startup times for process: Embedded ---

times in msec
 clock   self+sourced   self:  sourced script
 clock   elapsed:              other lines

000.001  000.001: --- NVIM STARTING ---
000.148  000.147: event init
000.220  000.072: early init
000.253  000.033: locale set
000.294  000.041: init first window
000.550  000.255: inits 1
000.564  000.015: window checked
000.566  000.002: parsing arguments
001.107  000.042  000.042: require('vim.shared')
001.191  000.043  000.043: require('vim.inspect')
001.256  000.042  000.042: require('vim._options')
001.258  000.147  000.062: require('vim._editor')
001.259  000.221  000.031: require('vim._init_packages')
001.261  000.474: init lua interpreter
001.322  000.061: expanding arguments
001.339  000.017: inits 2
001.613  000.274: init highlight
001.614  000.001: waiting for UI
099.866  098.252: done waiting for UI
099.892  000.026: clear screen
100.160  000.023  000.023: require('vim.keymap')
102.527  002.619  002.596: require('vim._defaults')
102.540  000.029: init default mappings & autocommands
103.879  000.157  000.157: sourcing /usr/share/nvim/runtime/ftplugin.vim
104.061  000.088  000.088: sourcing /usr/share/nvim/runtime/indent.vim
104.509  000.271  000.271: sourcing /usr/share/nvim/archlinux.lua
104.529  000.387  000.116: sourcing /etc/xdg/nvim/sysinit.vim
106.406  001.688  001.688: require('options')
112.510  000.026  000.026: require('vim.F')
112.662  005.856  005.831: require('vim.diagnostic')
114.785  008.367  002.511: require('keymaps')
115.350  000.548  000.548: require('lazy-bootstrap')
117.327  000.655  000.655: require('lazy')
117.453  000.112  000.112: require('kickstart/plugins/tokyonight')
117.635  000.173  000.173: require('kickstart/plugins/vim-tmux-navigator')
117.745  000.097  000.097: require('kickstart/plugins/lualine')
118.169  000.416  000.416: require('kickstart/plugins/gitsigns')
118.497  000.319  000.319: require('kickstart/plugins/telescope')
119.048  000.542  000.542: require('kickstart/plugins/lspconfig')
119.231  000.173  000.173: require('kickstart/plugins/conform')
119.567  000.328  000.328: require('kickstart/plugins/cmp')
119.656  000.080  000.080: require('kickstart/plugins/todo-comments')
119.778  000.114  000.114: require('kickstart/plugins/mini')
120.086  000.300  000.300: require('kickstart/plugins/treesitter')
120.171  000.075  000.075: require('kickstart/plugins/autotag')
120.307  000.129  000.129: require('kickstart/plugins/null-ls')
120.428  000.113  000.113: require('kickstart/plugins/lazygit')
120.599  000.163  000.163: require('kickstart.plugins.lint')
120.708  000.101  000.101: require('kickstart.plugins.autopairs')
120.845  000.130  000.130: require('kickstart.plugins.neo-tree')
121.008  000.072  000.072: require('ffi')
121.276  000.150  000.150: require('vim.fs')
121.761  000.443  000.443: require('vim.uri')
121.851  000.828  000.235: require('vim.loader')
123.253  001.330  001.330: require('lazy.stats')
124.078  000.743  000.743: require('lazy.core.util')
125.080  000.990  000.990: require('lazy.core.config')
125.649  000.181  000.181: require('lazy.core.handler')
126.607  000.240  000.240: require('lazy.pkg')
126.629  000.609  000.370: require('lazy.core.meta')
126.652  000.995  000.385: require('lazy.core.plugin')
126.675  001.585  000.410: require('lazy.core.loader')
127.856  000.183  000.183: require('lazy.core.fragments')
132.163  000.227  000.227: require('custom.plugins')
133.248  000.124  000.124: require('lazy.core.handler.event')
133.256  000.311  000.187: require('lazy.core.handler.ft')
133.406  000.116  000.116: require('lazy.core.handler.keys')
133.602  000.108  000.108: require('lazy.core.handler.cmd')
135.274  000.435  000.435: sourcing /usr/share/nvim/runtime/filetype.lua
137.487  000.999  000.999: require('catppuccin')
137.846  000.103  000.103: require('catppuccin.lib.hashing')
140.045  003.575  002.473: sourcing /home/alamin/.local/share/nvim/lazy/catppuccin/colors/catppuccin-mocha.vim
141.174  000.721  000.721: require('conform')
141.451  000.097  000.097: sourcing /home/alamin/.local/share/nvim/lazy/vim-tmux-navigator/plugin/tmux_navigator.vim
141.803  000.032  000.032: sourcing /home/alamin/.local/share/nvim/lazy/nvim-web-devicons/plugin/nvim-web-devicons.vim
143.183  000.225  000.225: require('lualine_require')
143.529  001.614  001.388: require('lualine')
144.408  000.144  000.144: require('catppuccin.utils.lualine')
144.491  000.078  000.078: require('catppuccin.palettes')
144.550  000.054  000.054: require('catppuccin.palettes.mocha')
145.935  000.059  000.059: require('lualine.utils.mode')
149.825  000.132  000.132: require('gitsigns.async')
149.954  000.125  000.125: require('gitsigns.debug.log')
150.365  000.408  000.408: require('gitsigns.config')
150.376  001.005  000.339: require('gitsigns')
150.985  000.376  000.376: require('gitsigns.highlight')
151.512  000.071  000.071: require('gitsigns.debounce')
152.005  000.314  000.314: sourcing /home/alamin/.local/share/nvim/lazy/vim-sleuth/plugin/sleuth.vim
152.637  000.043  000.043: require('Comment.config')
152.821  000.104  000.104: require('Comment.ft')
152.828  000.187  000.083: require('Comment.utils')
152.871  000.042  000.042: require('Comment.opfunc')
152.941  000.067  000.067: require('Comment.extra')
152.945  000.668  000.329: require('Comment.api')
153.010  000.774  000.106: sourcing /home/alamin/.local/share/nvim/lazy/Comment.nvim/plugin/Comment.lua
153.103  000.044  000.044: require('Comment')
153.812  000.034  000.034: require('nvim-ts-autotag._log')
153.850  000.035  000.035: require('nvim-ts-autotag.config.init')
154.145  000.034  000.034: require('vim.treesitter.language')
154.174  000.026  000.026: require('vim.func')
154.218  000.041  000.041: require('vim.func._memoize')
154.232  000.170  000.069: require('vim.treesitter.query')
154.288  000.054  000.054: require('vim.treesitter._range')
154.322  000.313  000.089: require('vim.treesitter.languagetree')
154.328  000.363  000.049: require('vim.treesitter')
154.332  000.399  000.037: require('nvim-ts-autotag.utils')
154.335  000.433  000.034: require('nvim-ts-autotag.config.ft')
154.338  000.485  000.052: require('nvim-ts-autotag.config.plugin')
154.344  000.621  000.067: require('nvim-ts-autotag.internal')
154.346  000.872  000.251: require('nvim-ts-autotag')
155.344  000.098  000.098: require('nvim-treesitter.compat')
156.816  001.329  001.329: require('nvim-treesitter.parsers')
156.918  000.099  000.099: require('nvim-treesitter.utils')
156.928  001.505  000.077: require('nvim-treesitter.ts_utils')
156.935  001.588  000.083: require('nvim-treesitter.tsrange')
157.029  000.093  000.093: require('nvim-treesitter.caching')
157.048  001.861  000.083: require('nvim-treesitter.query')
157.068  001.949  000.088: require('nvim-treesitter.configs')
157.071  002.160  000.210: require('nvim-treesitter-textobjects')
157.481  000.223  000.223: require('nvim-treesitter.info')
157.751  000.267  000.267: require('nvim-treesitter.shell_command_selectors')
157.837  000.706  000.215: require('nvim-treesitter.install')
158.047  000.207  000.207: require('nvim-treesitter.statusline')
158.337  000.286  000.286: require('nvim-treesitter.query_predicates')
158.341  001.268  000.070: require('nvim-treesitter')
158.491  000.044  000.044: require('nvim-treesitter.textobjects.shared')
158.496  000.137  000.093: require('nvim-treesitter.textobjects.select')
158.610  000.038  000.038: require('nvim-treesitter.textobjects.attach')
158.663  000.050  000.050: require('nvim-treesitter.textobjects.repeatable_move')
158.670  000.144  000.056: require('nvim-treesitter.textobjects.move')
158.880  000.046  000.046: require('nvim-treesitter.textobjects.swap')
158.992  000.051  000.051: require('nvim-treesitter.textobjects.lsp_interop')
159.012  004.112  000.306: sourcing /home/alamin/.local/share/nvim/lazy/nvim-treesitter-textobjects/plugin/nvim-treesitter-textobjects.vim
159.671  000.539  000.539: sourcing /home/alamin/.local/share/nvim/lazy/nvim-treesitter/plugin/nvim-treesitter.lua
161.213  000.094  000.094: require('nvim-treesitter.indent')
161.444  000.100  000.100: require('nvim-treesitter.locals')
161.451  000.183  000.082: require('nvim-treesitter.incremental_selection')
161.596  000.071  000.071: require('nvim-treesitter.highlight')
161.863  007.516  002.517: require('nvim-treesitter')
161.881  008.442  000.053: sourcing /home/alamin/.local/share/nvim/lazy/nvim-ts-autotag/plugin/nvim-ts-autotag.lua
163.154  000.041  000.041: require('mason-core.path')
163.275  000.068  000.068: require('mason-core.functional')
163.393  000.071  000.071: require('mason-core.functional.data')
163.399  000.114  000.042: require('mason-core.functional.function')
163.448  000.037  000.037: require('mason-core.functional.relation')
163.486  000.032  000.032: require('mason-core.functional.logic')
163.496  000.339  000.088: require('mason-core.platform')
163.536  000.039  000.039: require('mason.settings')
163.539  000.598  000.178: require('mason')
163.689  000.041  000.041: require('mason-core.functional.list')
163.727  000.034  000.034: require('mason-core.functional.string')
163.745  000.155  000.079: require('mason.api.command')
163.790  000.039  000.039: require('mason-registry.sources')
164.680  000.054  000.054: require('mason-core.log')
164.684  000.089  000.035: require('mason-core.EventEmitter')
164.721  000.035  000.035: require('mason-core.optional')
164.826  000.068  000.068: require('mason-core.async')
164.858  000.030  000.030: require('mason-core.async.uv')
164.864  000.141  000.043: require('mason-core.fs')
164.879  000.367  000.102: require('mason-registry')
164.885  000.833  000.466: require('mason-tool-installer')
164.899  000.881  000.048: sourcing /home/alamin/.local/share/nvim/lazy/mason-tool-installer.nvim/plugin/mason-tool-installer.lua
165.590  000.067  000.067: require('fidget.spinner.patterns')
165.594  000.101  000.034: require('fidget.spinner')
165.630  000.034  000.034: require('fidget.options')
165.649  000.196  000.062: require('fidget.progress.display')
165.744  000.046  000.046: require('fidget.logger')
165.954  000.093  000.093: require('vim.lsp.log')
166.578  000.620  000.620: require('vim.lsp.protocol')
167.102  000.331  000.331: require('vim.lsp._snippet_grammar')
167.174  000.068  000.068: require('vim.highlight')
167.197  000.615  000.216: require('vim.lsp.util')
167.384  000.082  000.082: require('vim.lsp.sync')
167.394  000.173  000.091: require('vim.lsp._changetracking')
167.607  000.212  000.212: require('vim.lsp.rpc')
167.709  001.962  000.250: require('vim.lsp')
167.926  000.214  000.214: require('vim.lsp.handlers')
167.934  002.283  000.061: require('fidget.progress.lsp')
168.240  000.088  000.088: require('fidget.poll')
168.245  000.176  000.088: require('fidget.notification.model')
168.380  000.134  000.134: require('fidget.notification.window')
168.486  000.102  000.102: require('fidget.notification.view')
168.503  000.508  000.095: require('fidget.notification')
168.507  000.571  000.064: require('fidget.progress.handle')
168.560  003.153  000.103: require('fidget.progress')
168.711  000.148  000.148: require('fidget.commands')
168.921  000.160  000.160: require('fidget.integration.nvim-tree')
169.055  000.132  000.132: require('fidget.integration.xcodebuild-nvim')
169.060  000.346  000.054: require('fidget.integration')
169.106  003.956  000.309: require('fidget')
171.666  000.291  000.291: require('neodev')
171.711  000.040  000.040: require('neodev.config')
171.823  000.038  000.038: require('neodev.util')
171.826  000.083  000.045: require('neodev.lsp')
171.950  000.122  000.122: require('lspconfig.util')
172.221  000.076  000.076: sourcing /home/alamin/.local/share/nvim/lazy/nvim-lspconfig/plugin/lspconfig.lua
172.688  000.204  000.204: require('cmp_nvim_lsp.source')
172.693  000.397  000.193: require('cmp_nvim_lsp')
172.943  000.032  000.032: require('mason-lspconfig.settings')
172.947  000.087  000.055: require('mason-lspconfig')
173.258  000.031  000.031: require('mason-lspconfig.notify')
173.264  000.080  000.049: require('mason-lspconfig.lspconfig_hook')
173.391  000.057  000.057: require('mason-core.functional.table')
173.429  000.163  000.106: require('mason-lspconfig.mappings.server')
173.466  000.034  000.034: require('mason-lspconfig.server_config_extensions')
173.565  000.034  000.034: require('lspconfig.async')
173.569  000.101  000.067: require('lspconfig.configs')
173.616  000.046  000.046: require('lspconfig.server_configurations.omnisharp')
173.925  000.033  000.033: require('mason-core.functional.number')
173.945  000.105  000.072: require('mason-lspconfig.api.command')
174.080  000.043  000.043: require('lspconfig')
174.121  000.037  000.037: require('lspconfig.server_configurations.lua_ls')
174.939  000.054  000.054: require('lspconfig.manager')
174.987  000.036  000.036: require('lspconfig.server_configurations.jsonls')
175.449  000.049  000.049: require('lspconfig.server_configurations.html')
175.930  000.068  000.068: require('lspconfig.server_configurations.tailwindcss')
176.437  000.065  000.065: require('lspconfig.server_configurations.tsserver')
176.827  000.075  000.075: require('lspconfig.server_configurations.cssls')
177.252  000.070  000.070: require('lspconfig.server_configurations.eslint')
177.895  000.037  000.037: require('null-ls.utils.tbl_flatten')
177.903  000.106  000.069: require('null-ls.utils')
177.924  000.171  000.065: require('null-ls.config')
177.994  000.030  000.030: require('null-ls.helpers.cache')
178.041  000.045  000.045: require('null-ls.helpers.diagnostics')
178.075  000.032  000.032: require('null-ls.helpers.formatter_factory')
178.175  000.040  000.040: require('null-ls.logger')
178.220  000.043  000.043: require('null-ls.state')
178.223  000.146  000.063: require('null-ls.helpers.generator_factory')
178.299  000.037  000.037: require('null-ls.helpers.command_resolver')
178.302  000.078  000.041: require('null-ls.helpers.make_builtin')
178.338  000.035  000.035: require('null-ls.helpers.range_formatting_args_factory')
178.340  000.414  000.049: require('null-ls.helpers')
178.500  000.050  000.050: require('null-ls.methods')
178.504  000.097  000.047: require('null-ls.diagnostics')
178.510  000.169  000.071: require('null-ls.sources')
178.551  000.038  000.038: require('null-ls.builtins')
178.554  000.853  000.061: require('null-ls')
178.610  000.053  000.053: require('null-ls.builtins.diagnostics.markdownlint')
178.657  000.044  000.044: require('null-ls.builtins.formatting.mdformat')
178.731  000.071  000.071: require('null-ls.builtins.formatting.prettier')
178.793  000.059  000.059: require('null-ls.builtins.formatting.prettierd')
178.842  000.046  000.046: require('null-ls.builtins.formatting.stylua')
178.890  000.046  000.046: require('null-ls.builtins.code_actions.gitsigns')
179.479  000.070  000.070: require('null-ls.client')
180.144  000.578  000.578: require('mini.ai')
180.685  000.356  000.356: require('mini.surround')
181.095  000.185  000.185: require('mini.statusline')
181.336  000.055  000.055: sourcing /usr/share/nvim/runtime/plugin/editorconfig.lua
181.504  000.145  000.145: sourcing /usr/share/nvim/runtime/plugin/gzip.vim
181.596  000.065  000.065: sourcing /usr/share/nvim/runtime/plugin/man.lua
182.003  000.164  000.164: sourcing /usr/share/nvim/runtime/pack/dist/opt/matchit/plugin/matchit.vim
182.020  000.400  000.236: sourcing /usr/share/nvim/runtime/plugin/matchit.vim
182.151  000.109  000.109: sourcing /usr/share/nvim/runtime/plugin/matchparen.vim
182.448  000.244  000.244: sourcing /usr/share/nvim/runtime/plugin/netrwPlugin.vim
182.575  000.065  000.065: sourcing /usr/share/nvim/runtime/plugin/osc52.lua
182.742  000.121  000.121: sourcing /usr/share/nvim/runtime/plugin/rplugin.vim
182.822  000.048  000.048: sourcing /usr/share/nvim/runtime/plugin/shada.vim
182.879  000.028  000.028: sourcing /usr/share/nvim/runtime/plugin/spellfile.vim
182.968  000.065  000.065: sourcing /usr/share/nvim/runtime/plugin/tarPlugin.vim
183.103  000.107  000.107: sourcing /usr/share/nvim/runtime/plugin/tohtml.lua
183.145  000.016  000.016: sourcing /usr/share/nvim/runtime/plugin/tutor.vim
183.276  000.107  000.107: sourcing /usr/share/nvim/runtime/plugin/zipPlugin.vim
183.496  000.066  000.066: sourcing /home/alamin/.local/share/nvim/lazy/cmp-nvim-lsp/after/plugin/cmp_nvim_lsp.lua
183.558  068.196  028.096: require('lazy-plugins')
183.561  078.937  000.138: sourcing /home/alamin/.config/nvim/init.lua
183.570  001.461: sourcing vimrc file(s)
183.873  000.050  000.050: sourcing /usr/share/nvim/runtime/filetype.lua
184.056  000.051  000.051: sourcing /usr/share/nvim/runtime/syntax/synload.vim
184.120  000.200  000.149: sourcing /usr/share/nvim/runtime/syntax/syntax.vim
184.130  000.310: inits 3
186.102  001.972: reading ShaDa
186.196  000.094: opening buffers
186.290  000.094: BufEnter autocommands
186.293  000.003: editing files in windows
186.732  000.028  000.028: sourcing /home/alamin/.local/share/nvim/lazy/plenary.nvim/plugin/plenary.vim
186.815  000.018  000.018: sourcing /home/alamin/.local/share/nvim/lazy/todo-comments.nvim/plugin/todo.vim
187.409  000.119  000.119: require('todo-comments.util')
187.423  000.240  000.121: require('todo-comments.config')
187.631  000.155  000.155: require('todo-comments.highlight')
187.643  000.218  000.063: require('todo-comments.jump')
187.660  000.774  000.316: require('todo-comments')
188.055  000.123  000.123: require('vim.treesitter.highlighter')
188.880  000.213  000.213: sourcing /home/alamin/.local/share/nvim/lazy/telescope.nvim/plugin/telescope.lua
189.328  000.080  000.080: require('telescope._extensions')
189.336  000.426  000.346: require('telescope')
189.424  000.086  000.086: require('telescope.themes')
190.210  000.389  000.389: require('plenary.bit')
190.435  000.223  000.223: require('plenary.functional')
190.499  000.792  000.180: require('plenary.path')
190.521  000.939  000.147: require('plenary.strings')
190.654  000.131  000.131: require('telescope.deprecated')
191.952  000.513  000.513: require('plenary.log')
192.054  001.084  000.571: require('telescope.log')
192.916  000.062  000.062: require('plenary.compat')
192.927  000.582  000.520: require('plenary.job')
192.977  000.048  000.048: require('telescope.state')
193.000  000.944  000.313: require('telescope.utils')
193.008  002.352  000.324: require('telescope.sorters')
194.476  005.038  001.616: require('telescope.config')
195.481  000.145  000.145: require('fzf_lib')
195.487  000.222  000.078: require('telescope._extensions.fzf')
195.549  000.056  000.056: require('telescope._extensions.ui-select')
195.835  000.031  000.031: require('plenary.tbl')
195.839  000.064  000.033: require('plenary.vararg.rotate')
195.841  000.096  000.031: require('plenary.vararg')
195.870  000.028  000.028: require('plenary.errors')
195.874  000.163  000.039: require('plenary.async.async')
196.002  000.031  000.031: require('plenary.async.structs')
196.009  000.072  000.042: require('plenary.async.control')
196.013  000.109  000.037: require('plenary.async.util')
196.016  000.139  000.030: require('plenary.async.tests')
196.017  000.344  000.042: require('plenary.async')
196.144  000.045  000.045: require('plenary.window.border')
196.178  000.032  000.032: require('plenary.window')
196.208  000.028  000.028: require('plenary.popup.utils')
196.212  000.193  000.088: require('plenary.popup')
196.403  000.073  000.073: require('telescope.pickers.scroller')
196.448  000.042  000.042: require('telescope.actions.state')
196.490  000.040  000.040: require('telescope.actions.utils')
196.581  000.043  000.043: require('telescope.actions.mt')
196.598  000.106  000.063: require('telescope.actions.set')
196.692  000.044  000.044: require('telescope.config.resolve')
196.695  000.095  000.051: require('telescope.pickers.entry_display')
196.734  000.038  000.038: require('telescope.from_entry')
196.910  000.696  000.302: require('telescope.actions')
196.965  000.053  000.053: require('telescope.debounce')
197.072  000.104  000.104: require('telescope.mappings')
197.127  000.052  000.052: require('telescope.pickers.highlights')
197.169  000.040  000.040: require('telescope.pickers.window')
197.254  000.042  000.042: require('telescope.algos.linked_list')
197.258  000.087  000.046: require('telescope.entry_manager')
197.298  000.039  000.039: require('telescope.pickers.multi')
197.313  001.761  000.152: require('telescope.pickers')
197.474  000.114  000.114: require('telescope.make_entry')
197.516  000.039  000.039: require('telescope.finders.async_static_finder')
197.702  000.030  000.030: require('plenary.class')
197.714  000.092  000.061: require('telescope._')
197.716  000.198  000.107: require('telescope.finders.async_oneshot_finder')
197.756  000.039  000.039: require('telescope.finders.async_job_finder')
197.761  000.446  000.057: require('telescope.finders')
197.802  000.035  000.035: require('vim.ui')
197.890  000.080  000.080: require('telescope.builtin')
198.177  002.578: VimEnter autocommands
198.204  000.027: UIEnter autocommands
198.481  000.167  000.167: sourcing /usr/share/nvim/runtime/autoload/provider/clipboard.vim
198.487  000.116: before starting main loop
198.800  000.313: first screen update
198.802  000.002: --- NVIM STARTED ---

