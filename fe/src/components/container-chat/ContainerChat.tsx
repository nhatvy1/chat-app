import InboxChat from "./Inbox/InboxChat";
import InboxLayout from "./Inbox/InboxLayout";
import Setting from "./setting/Setting";

const ContainerChat = () => {
  return (
    <div className='basis-4/5 flex justify-between'>
      <InboxLayout />
      <InboxChat />
      <Setting />
    </div>
  );
};

export default ContainerChat;
