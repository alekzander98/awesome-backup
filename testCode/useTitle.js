import { useEffect, useState, useCallback } from 'react';

function useTitle(title) {
  useEffect(() => {
    const prevTitle = document.title; // 保存之前的标题
    document.title = title; // 设置新标题
    return () => {
      document.title = prevTitle; // 清理时恢复之前的标题
    };
  }, [title]); // 依赖于 title，当 title 变化时重新执行

  const [ _title, _setTitle ] = useState(title); // 本地状态

  const setTitle = useCallback(() => {
    _setTitle(title); // 更新本地状态
    document.title = title; // 更新文档标题
  }, [title]);

  return [ _title, setTitle ]; // 返回标题和设置标题的函数
}
