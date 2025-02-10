import Butter, { ButterStatic } from 'buttercms';

let butter: ButterStatic;

try {
  butter = Butter(process.env.NEXT_PUBLIC_BUTTER_GLOBAL_CMS_API_KEY as string)
}
catch (e) {
  console.log(e)
}

export const getGlobalContent = (modelName: string) => {
  return butter.page.list(modelName, {
    "fields.hospitals.hospital_name": process.env.NEXT_PUBLIC_BUTTER_HOSPITAL,
    levels: 2
  } as any)
  .then((resp) => {
    return resp?.data?.data
  })
  .catch((err) => {
    console.error('error: ', err)
  })
}