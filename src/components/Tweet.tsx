type TweetProps = {
    text: string
}

export function Tweet(props: TweetProps) {
    return <p>Tweet { props.text }</p>
}