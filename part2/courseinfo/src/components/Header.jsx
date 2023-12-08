const Header = ({ title, type }) => {
    const HeadingTag = type || 'h2';

    return (
        <HeadingTag>{title}</HeadingTag>
    )
}

export default Header