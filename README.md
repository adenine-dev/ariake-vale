# ariake-vale

Intended to be used with customize ui and the following settings:
```json
"customizeUI.font.regular": "Fira Sans",
"customizeUI.activityBar": "regular",
"customizeUI.stylesheet": {
    ".window-appicon": "display: none !important;",
    ".menubar-menu-button:first-child": "margin-left: 4px !important;",
    ".slider": "background: transparent !important",
    ".vertical>.slider::after": "border-radius: 1000px !important;content: '' !important;position: absolute !important;width: 4px !important;height: 100% !important;background: rgb(221 162 246 / 60%) !important;",
    ".horizontal>.slider::after": "border-radius: 1000px !important;content: '' !important;position: absolute !important;width: 100% !important;height: 6px !important;background: rgb(221 162 246 / 60%) !important;",
    ".slider:hover::after": "background: rgb(221 162 246 / 80%) !important;",
    ".monaco-editor .minimap-slider .minimap-slider-horizontal": "2px solid rgb(221 162 246)",
    ".monaco-text-button": "border-radius: 6px !important",
    ".monaco-button-dropdown .monaco-text-button": "border-radius: 6px 0 0 6px !important;",
    ".monaco-button-dropdown .monaco-dropdown-button": "border-radius: 0 6px 6px 0 !important;",
    ".monaco-workbench .activitybar>.content :not(.monaco-menu)>.monaco-action-bar .badge .badge-content": "line-height: unset !important;",
    ".monaco-workbench .progress-badge>.badge-content:before": "top: 1px !important",
    ".badge": "display: flex; align-items: center; justify-content: center;",
    ".badge-content": "font-weight: 700 !important;",
    ".tab": "border-radius: 4px 4px 0 0 !important;"
},
```