'use client'

import React from 'react';

const InputPage = () => {
    return (
        <div>
            <form method={"post"} action={"post-with-hono"}>
                <p>文字を入力してください。</p>
                <input type={"text"} name={'sentence'} />
                <button type={"submit"}>Postする</button>
            </form>
        </div>
    );
};

export default InputPage;