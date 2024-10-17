import { generateReactHelpers } from "@uploadthing/react";
import { OurFileRouter } from "./../app/api/uploadThing/core";

export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();
