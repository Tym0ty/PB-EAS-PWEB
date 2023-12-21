import { CollectionConfig } from "payload/types";
import { authenticatedUser } from "../access/authenticatedUser";

const Users: CollectionConfig = {
  slug: "users",
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
  ],
};

export default Users;
