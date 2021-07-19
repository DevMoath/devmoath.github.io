import classNames from 'classnames';
import snippets from '@data/snippets';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import copy from '@devmoath/copy-text';
import { useState } from 'react';
import { ClipboardCheckIcon, ClipboardIcon } from '@heroicons/react/outline';

export default function Snippets() {
    const length = snippets.length - 1;

    const [state, setState] = useState({});

    const copyCode = (code, index) => {
        copy(code);
        setState({ ...state, [index]: true });

        setTimeout(() => setState({ ...state, [index]: false }), 2000);
    };

    return (
        <>
            {snippets.map((snippet, index) => {
                return (
                    <div className={classNames('mt-10 pb-10', index < length && 'border-b-2 mb-10')} key={Math.random()}>
                        <p className="text-lg mb-5">
                            {snippet.title}
                            <button className="btn btn-sm ml-2" onClick={() => copyCode(snippet.code, index)}>
                                <span className="mr-2">Copy</span>
                                {state[index] ? <ClipboardCheckIcon className="h-5 w-5" /> : <ClipboardIcon className="h-5 w-5" />}
                            </button>
                        </p>
                        <SyntaxHighlighter language={snippet.language} style={atomOneDark} className="rounded-box !p-5">
                            {snippet.code}
                        </SyntaxHighlighter>
                    </div>
                );
            })}
        </>
    );
}
