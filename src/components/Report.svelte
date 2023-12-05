<script lang="ts">
  let responseMessage: string;
  async function submit(e: SubmitEvent) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    // const response = await fetch("/api/ticket", {
    //   method: "POST",
    //   body: formData,
    // });
    // const data = await response.json();
    // responseMessage = data.message;
    if (formData.get("type") === "none") {
      responseMessage = "请选择一项";
    } else {
      responseMessage = "";
    }
    // if (response.status == 200) {
    //   document.cookie = "token=" + responseMessage + ";";
    // }
  }
</script>

<div class="ablur w-80% border-rd-5.5 border-1 border-solid p-12 m-auto">
  <h1 class="m-2">RSN 问题反馈</h1>
  <label
    class="text-[#212121] font-LXGW text-6 font-not-italic font-400 lh-normal m-2"
  >
    举报
  </label>
  <p class="m-2 text-red">注：本表单仅限受损害者本人或被授权者提交。</p>
  <form
    on:submit={submit}
    method="post"
    enctype="multipart/form-data"
    target="niframe"
  >
    <label
      class="text-[#212121] font-LXGW text-6 font-not-italic font-400 lh-normal m-2"
    >
      被举报者
    </label>
    <input
      type="text"
      name="username"
      placeholder="你要举报的游戏ID"
      required
      minlength="6"
      maxlength="6"
      class="w-100% h-14.75 border-rd-3 border-2 border-solid border-[#000] bg-[#FFF] p-2 m-2"
    />
    <label
      class="text-[#212121] font-LXGW text-6 font-not-italic font-400 lh-normal m-2"
    >
      理由
    </label>
    <textarea
      name="username"
      required
      rows="5"
      placeholder="可以写一写事情经过 受害坐标等 支持Markdown"
      class="w-100% h-35 border-rd-3 border-2 border-solid border-[#000] bg-[#FFF] p-2 m-2"
    />
    <label
      class="text-[#212121] font-LXGW text-4 font-not-italic font-400 lh-normal m-2"
    >
      如有附加材料 (图片等) 可上传至图床后使用 Markdown 插入 <code class="bg-[#000] text-[#FFF]">![图片名](图片地址)</code>
    </label>
    <button
      class="flex h-12 px-6 py-3 justify-between items-center self-stretch border-rd-3 bg-[#000] text-[#FFF] m-2"
      >提交</button
    >
    {#if responseMessage}
      <p class="text-red">{responseMessage}</p>
    {/if}
  </form>
</div>

<style>
  .ablur {
    background-color: transparent;
    -webkit-backdrop-filter: blur(16px);
    backdrop-filter: blur(16px);
  }
</style>
