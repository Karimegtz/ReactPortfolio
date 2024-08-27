import coverImage from '../../assets/cover/cover-image.png';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Karime's Blog</h1>
      <img src={coverImage} alt="wooden background"></img>
      {props.children}
    </header>
  );
}

export default Header;
