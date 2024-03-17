import type { CodegenConfig } from "@graphql-codegen/cli";
import { env } from "./src/env";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "https://cordee13.fr/graphql": {
        headers: {
          Authorization: `Basic ${btoa(`WORDPRESS_USERNAME:WORDPRESS_PASSWORD`)}`,
        },
      },
    },
  ],
  documents: "src/server/documents/*.tsx",
  ignoreNoDocuments: false,
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
