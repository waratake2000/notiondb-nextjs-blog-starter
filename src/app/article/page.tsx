import ArticleWrapper from '@/features/article/components/ArticleWrapper'
import TopBanner from '@/features/common/components/TopBanner'
import React from 'react'

const page = () => {
  return (
    <>
      <TopBanner
        articleInfo={{
          imgUrl : "http://waratake-blog.com/_next/image?url=https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5616e8a4-1a67-4b3c-8d3d-4518c3285d6b%2F776a1511-9e5b-4b79-98ec-2e6a778d1fec%2F26.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DAKIAT73L2G45GO43JXI4%252F20241024%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20241024T230310Z%26X-Amz-Expires%3D3600%26X-Amz-Signature%3D93d8b1ce3c2e865e3fc482291789ffdf6a4071587e5bd88d666b308ad1fc87ca%26X-Amz-SignedHeaders%3Dhost%26x-id%3DGetObject&w=3840&q=75",
          alt: "test",
          date: "2024 3 / 4",
          tags:
            [
              { children: "Docker"},
              { children: "開発"}
            ],
          children: "【サンプル】サンプルサンプサンプルサプルサンプサンプル"
        }}
      />
      <ArticleWrapper allContents="" />


    </>
  )
}

export default page
