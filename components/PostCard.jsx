import React from 'react'
import Image from 'next/image';

const PostCard = ({ post }) => {
  return (
    <div style={{display: "flex", alignItems: "flex-start", gap: 12, lineHeight: 1}}>
        <Image
        alt={post.title}
        height={64}
        layout="fixed"
        objectFit="cover"
        src={post.image}
        width={64}
      />
      <div style={{display: "flex", flexDirection:"column", gap: 4}}>
        <h2 style={{ marginBottom: 6, marginTop: 0 }}>{post.title}</h2>
        <p style={{
            marginBottom: 4,
            marginTop: 0,
            WebkitLineClamp: 1,
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
          }}>{post.description}</p>
        <span style={{color: "#999"}}>{post.createdAt}</span>
      </div>
    </div>
  )
}

export default PostCard