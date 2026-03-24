export interface BrowserPhoneConfig {
  loadAlternateLang: boolean | string;
  VoiceMailSubscribe: boolean | string;
  EnableTextMessaging: boolean | string;
  ChatEngine: string;
  WelcomeScreenAccept: string;
  profileName: string;
  wssServer: string;
  WebSocketPort: string;
  ServerPath: string;
  SipDomain: string;
  SipUsername: string;
  SipPassword: string;
}

export const fallbackBrowserPhoneConfig: BrowserPhoneConfig = {
  loadAlternateLang: "",
  VoiceMailSubscribe: "",
  EnableTextMessaging: "",
  ChatEngine: "",
  WelcomeScreenAccept: "",
  profileName: "Nekvo ime",
  wssServer: "vmi2987095.contaboserver.net",
  WebSocketPort: "8089",
  ServerPath: "/ws",
  SipDomain: "vmi2987095.contaboserver.net",
  SipUsername: "3001",
  SipPassword: "764e51430635d6152e38db5303795f2a",
};
