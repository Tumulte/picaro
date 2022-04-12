export type Message = { text: string, type: "warning" | "error" | "success" | "info", key?: string }
export type MessageStatus = { [key: string]: { status: boolean, index: number } }
