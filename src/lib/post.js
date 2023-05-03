import path from 'path';
import fs from 'fs';
import matter from 'gray-matter'
import { remark } from 'remark';
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'src/posts');

// mdファイルのデータを取り出す
export function getPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ''); // ファイル名(id)

    // マークダウンファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const matterResult = matter(fileContents);

    // idとdataを返す
    return {
      id,
      ...matterResult.data,
    };
  });

  // return JSON.parse(JSON.stringify(allPostsData)); // Date型をstringに変換
  return allPostsData;

}

// getStaticPathでreturnで使うpathを取得する
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
  // 上記return()で返される構造
  /*
    [
      {
        params: {
          id: "ssg-sssr"
        }
      }
      {
        parama: {
          id: "next-react"
        }
      }
    ]
  */
}

// idに基づいてブログ投稿データを返す
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, 'utf-8'); // fullPathに基づいてfileの中身を非同期で読み込み

  const matterResult = matter(fileContent); // メタデータを読み込む

  const blogContent = await remark().use(html).process(matterResult.content);

  const blogContentHTML = blogContent.toString();

  return {
    id,
    blogContentHTML,
    ...matterResult.data,
  }
}