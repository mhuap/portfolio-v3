import React from 'react';
import SparklePopover from './Sparkle';

export default function FolderTitle({
  title,
  underlined = true,
  extra
} : {
  title: string,
  underlined?: boolean,
  extra?: string
}) {
  const css = underlined ? "underlined-folder-title" : "folder-title";

  return (
    <div className={css}>
      {title}
      {extra && <SparklePopover />}
    </div>
  )
}
