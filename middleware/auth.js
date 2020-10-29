export default function ({ store, redirect }) {
  // If the user is not authenticated
  console.log(store.state.admin.token)
  if (!store.state.admin.token) {
    redirect('/admin/login')
  }
}