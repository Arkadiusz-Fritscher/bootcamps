export default function ({ $strapi, redirect }) {
  if (process.client) {
    if (!$strapi.user) {
      redirect('/');
    }
  }
}
