import classNames from 'classnames';
import snippets from '@data/snippets';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import copy from '@devmoath/copy-text';
import { useState } from 'react';

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
                                {state[index] ? (
                                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                ) : (
                                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                                        <path d="M8 16c0 1.886 0 2.828.586 3.414C9.172 20 10.114 20 12 20h4c1.886 0 2.828 0 3.414-.586C20 18.828 20 17.886 20 16v-4c0-1.886 0-2.828-.586-3.414C18.828 8 17.886 8 16 8m-8 8h4c1.886 0 2.828 0 3.414-.586C16 14.828 16 13.886 16 12V8m-8 8c-1.886 0-2.828 0-3.414-.586C4 14.828 4 13.886 4 12V8c0-1.886 0-2.828.586-3.414C5.172 4 6.114 4 8 4h4c1.886 0 2.828 0 3.414.586C16 5.172 16 6.114 16 8" />
                                    </svg>
                                )}
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
