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
    建议
  </label>
  <form
    on:submit={submit}
    method="post"
    enctype="multipart/form-data"
    target="niframe"
  >
    <textarea
      name="username"
      required
      rows="5"
      placeholder="建议写在这里 支持Markdown"
      class="w-100% h-35 border-rd-3 border-2 border-solid border-[#000] bg-[#FFF] p-2 m-2"
    />
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
