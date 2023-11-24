import InboxChatContent from "./InboxChatContent";
import InboxChatHeader from "./InboxChatHeader";
import InputChat from "./InputChat";

const InboxChat = () => {
  return (
    <div className='basis-[60%] border-r border-l relative h-full'>
      <InboxChatHeader />
      <InboxChatContent />
      <InputChat />
    </div>
  );
};

export default InboxChat;
