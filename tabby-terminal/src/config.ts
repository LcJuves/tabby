import { ConfigProvider, Platform } from 'tabby-core'

export const DEFAULT_TERMINAL_COLOR_SCHEME_NAME = 'Dark Pastel'

/** @hidden */
export class TerminalConfigProvider extends ConfigProvider {
    defaults = {
        hotkeys: {
            'copy-current-path': [],
        },
        terminal: {
            frontend: 'xterm',
            fontSize: 14,
            fallbackFont: null,
            linePadding: 0,
            bell: 'off',
            bracketedPaste: true,
            background: 'theme',
            ligatures: false,
            cursor: 'block',
            cursorBlink: true,
            hideTabIndex: false,
            hideCloseButton: false,
            rightClick: 'menu',
            pasteOnMiddleClick: true,
            copyOnSelect: false,
            scrollOnInput: true,
            altIsMeta: false,
            wordSeparator: ' ()[]{}\'"',
            colorScheme: {
                __nonStructural: true,
                name: DEFAULT_TERMINAL_COLOR_SCHEME_NAME,
                foreground: '#ffffff',
                background: '#000000',
                selection: null,
                cursor: '#bbbbbb',
                cursorAccent: null,
                colors: [
                    '#000000',
                    '#ff5555',
                    '#55ff55',
                    '#ffff55',
                    '#5555ff',
                    '#ff55ff',
                    '#55ffff',
                    '#bbbbbb',
                    '#555555',
                    '#ff5555',
                    '#55ff55',
                    '#ffff55',
                    '#5555ff',
                    '#ff55ff',
                    '#55ffff',
                    '#ffffff',
                ],
            },
            customColorSchemes: [],
            warnOnMultilinePaste: true,
            searchRegexAlwaysEnabled: false,
            searchOptions: {
                regex: false,
                wholeWord: false,
                caseSensitive: false,
            },
            detectProgress: true,
            scrollbackLines: 25000,
        },
    }

    platformDefaults = {
        [Platform.macOS]: {
            terminal: {
                font: 'Menlo',
            },
            hotkeys: {
                'ctrl-c': ['Ctrl-C'],
                copy: [
                    '⌘-C',
                ],
                paste: [
                    '⌘-V',
                ],
                clear: [
                    '⌘-K',
                ],
                'select-all': ['⌘-A'],
                'zoom-in': [
                    '⌘-=',
                    '⌘-Shift-=',
                ],
                'zoom-out': [
                    '⌘--',
                    '⌘-Shift--',
                ],
                'reset-zoom': [
                    '⌘-0',
                ],
                home: ['⌘-Left', 'Home'],
                end: ['⌘-Right', 'End'],
                'previous-word': ['⌥-Left'],
                'next-word': ['⌥-Right'],
                'delete-previous-word': ['⌥-Backspace'],
                'delete-next-word': ['⌥-Delete'],
                search: [
                    '⌘-F',
                ],
                'pane-focus-all': [
                    '⌘-Shift-I',
                ],
            },
        },
        [Platform.Windows]: {
            terminal: {
                font: 'Consolas',
                rightClick: 'paste',
                pasteOnMiddleClick: false,
                copyOnSelect: true,
            },
            hotkeys: {
                'ctrl-c': ['Ctrl-C'],
                copy: [
                    'Ctrl-Shift-C',
                ],
                paste: [
                    'Ctrl-Shift-V',
                    'Shift-Insert',
                ],
                'select-all': ['Ctrl-Shift-A'],
                clear: [],
                'zoom-in': [
                    'Ctrl-=',
                    'Ctrl-Shift-=',
                ],
                'zoom-out': [
                    'Ctrl--',
                    'Ctrl-Shift--',
                ],
                'reset-zoom': [
                    'Ctrl-0',
                ],
                home: ['Home'],
                end: ['End'],
                'previous-word': ['Ctrl-Left'],
                'next-word': ['Ctrl-Right'],
                'delete-previous-word': ['Ctrl-Backspace'],
                'delete-next-word': ['Ctrl-Delete'],
                search: [
                    'Ctrl-Shift-F',
                ],
                'pane-focus-all': [
                    'Ctrl-Shift-I',
                ],
            },
        },
        [Platform.Linux]: {
            terminal: {
                font: 'Liberation Mono',
            },
            hotkeys: {
                'ctrl-c': ['Ctrl-C'],
                copy: [
                    'Ctrl-Shift-C',
                ],
                paste: [
                    'Ctrl-Shift-V',
                    'Shift-Insert',
                ],
                'select-all': ['Ctrl-Shift-A'],
                clear: [],
                'zoom-in': [
                    'Ctrl-=',
                    'Ctrl-Shift-=',
                ],
                'zoom-out': [
                    'Ctrl--',
                    'Ctrl-Shift--',
                ],
                'reset-zoom': [
                    'Ctrl-0',
                ],
                home: ['Home'],
                end: ['End'],
                'previous-word': ['Ctrl-Left'],
                'next-word': ['Ctrl-Right'],
                'delete-previous-word': ['Ctrl-Backspace'],
                'delete-next-word': ['Ctrl-Delete'],
                search: [
                    'Ctrl-Shift-F',
                ],
                'pane-focus-all': [
                    'Ctrl-Shift-I',
                ],
            },
        },
    }
}
