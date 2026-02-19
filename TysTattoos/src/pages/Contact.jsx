import GogForm from "../assets/Gog-form.png";

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>Message us on Facebook or Instagram to book your appointment.</p>
      <p>Instagram: <a href="https://www.instagram.com/tys.tattoos12/">@tys.tattoos12</a></p>
      <p>Facebook: <a href="https://www.facebook.com/profile.php?id=100087181602095">Profile</a></p>
      <p>Email: 

      <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=teyhalebowtattoo@gmail.com&su=Tattoo%20Inquiry"
  target="_blank"
  rel="noopener noreferrer">teyhalebowtattoo@gmail.com
</a>
</p>
      <p className="inline">Google form Link: <a href="https://docs.google.com/forms/d/e/1FAIpQLSdv1qBmWDSJG0toPvnMp_LsTu8BlCeLvs7vIAsmtMATgnEUew/viewform"
      target="_blank" rel="noopener noreferrer"><img src={GogForm} className="form-img"/></a></p>

    </div>
  );
}
