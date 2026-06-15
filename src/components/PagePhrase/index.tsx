type PagePhraseProps = {
    title: string;
};

export default function PagePhrase(props: PagePhraseProps) {
  return (
    <div>
        <h1>
            This is the <span style={{ color: "red" }}>{props.title}</span> page
        </h1>
    </div>
  );
}