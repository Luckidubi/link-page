import Link from "./Link";

export default function ProfileLinks() {
  return (
    <>
      <div className="main-link-section">
        <Link id="twitter" url="https://twitter.com/luckidubi/">
          Twitter Link
        </Link>

        <Link id="btn__zuri" url="https://training.zuri.team/">
          Zuri Team
        </Link>

        <Link
          id="books"
          title="This is where you find books about design and coding"
          url="https://books.zuri.team/"
        >
          Zuri Books
        </Link>

        <Link
          id="book__python"
          title="A python programming book with precise examples to take you from novice to pro"
          url="https://books.zuri.team/python-for-beginners?ref_id=Luckidubi"
        >
          Python Books
        </Link>
        <Link
          id="pitch"
          title="With a huge database of coders, we help you do a background check on any coder of choice"
          url="https://background.zuri.team/"
        >
          Background Check for Coders
        </Link>
        <Link
          id="book__design"
          title="Get a free book on design, offered by Zuri"
          url=" https://books.zuri.team/design-rules"
        >
          Design Books
        </Link>
        <Link
          id="contact"
          
          url="/contact"
        >
         Contact Me
        </Link>
      </div>
    </>
  );
}
