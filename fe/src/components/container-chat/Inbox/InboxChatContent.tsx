const messages = ["first", "xyz", "dasd", "ddasdas", "dadas Loremfdjfijsdijfsdoifjsdjfoidsjifjiosdjfsdifjdsojfisdjfij isdjfijsdif ojsdiofjosdjf fdiasfjisdjfiojdsifjosidjfoisd", '123', '3123', '3123', '312312', '31312', '31231', 'last'];

const InboxChatContent = () => {
  return (
    <div className='absolute top-[95px] h-[calc(100%-83px-100px)] left-0 right-0 p-5 overflow-auto flex flex-col-reverse no-scrollbar bg-slate-100'>
      <ul>
        {messages.map((item, index) => (
          <li key={index} className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
            <p className={`${index % 2 === 0 ? 'bg-slate-200 rounded-br-2xl' : 'bg-white rounded-bl-2xl'} rounded-t-2xl max-w-[60%] my-2 p-4`}>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InboxChatContent;
