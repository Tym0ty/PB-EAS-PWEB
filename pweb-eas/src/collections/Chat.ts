import { CollectionConfig } from "payload/types";

const Chat: CollectionConfig = {
  slug: "chat",
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "message",
      type: "textarea",
      required: true,
    },
    {
      name: "from",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      name: "to",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
  ],
};

export default Chat;
