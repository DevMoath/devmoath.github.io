import { classNames } from '@utils/Helpers';
import snippets from '@data/snippets';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Snippets() {
    const length = snippets.length - 1;

    return (
        <>
            {snippets.map((snippet, index) => {
                return (
                    <div className={classNames('mt-10 pb-10', index < length && 'border-b-2 mb-10')} key={Math.random()}>
                        <p className="text-lg mb-5">{snippet.title}</p>
                        <SyntaxHighlighter language="php" style={atomOneDark} className="rounded-box !p-5">
                            {snippet.code}
                        </SyntaxHighlighter>
                    </div>
                );
            })}
        </>
    );
}
