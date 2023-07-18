export default function AddProfileDataToUserSession(session) {
  if (session.user && !session.user.profile) {
    const slogan = "We are almost the best!"
    const profileimage = "/../public/assets/profileimagesample.jpg"
    const firstname = "Thom";
    const lastname = "Veldpaus";

    session.user = {
      ...session.user,
      firstname,
      lastname,
      profile: {
        slogan,
        profileimage,
      }
    }
  }
}