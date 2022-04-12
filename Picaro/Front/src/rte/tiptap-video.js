import { Node, mergeAttributes } from "@tiptap/core";

export default Node.create({
  name: "video",

  addOptions: {
    HTMLAttributes: {}
  },

  group: "block",

  content: "inline",

  draggable: true,

  addAttributes() {
    return {
      src: {
        default: null
      },
      type: {
        default: "video/webm"
      }
    };
  },

  parseHTML() {
    return [
      {
        tag: "video[controls]"
      },
      [{ tag: "source[src]" }]
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "video",
      { controls: true },
      ["source", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)]
    ];
  },

  addCommands() {
    return {
      setVideo: attributes => ({ commands }) => {
        return commands.setNode("video", attributes);
      }
    };
  },

  addKeyboardShortcuts() {
    return {
      "Mod-Alt-v": () => this.editor.commands.addVideo()
    };
  }
});
