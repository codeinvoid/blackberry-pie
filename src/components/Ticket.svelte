<script lang="ts">
import Account from './Account.svelte';
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

<label
  class="text-[#212121] font-LXGW text-6 font-not-italic font-400 lh-normal m-2"
>
  当前账号
</label>
<Account />
<br />
<form
  on:submit={submit}
  method="post"
  enctype="multipart/form-data"
  target="niframe"
>
  <label
    class="text-[#212121] font-LXGW text-6 font-not-italic font-400 lh-normal m-2"
  >
    反馈类型
  </label>
  <select
    name="type"
    id="type"
    class="w-100% h-14.75 border-rd-3 border-2 border-solid border-[#000] bg-[#FFF] p-2 m-2"
  >
    <option value="none">请选择</option>
    <option value="report">举报</option>
    <option value="bug">错误</option>
    <option value="advice">建议</option>
  </select>
  <button
    class="flex h-12 px-6 py-3 justify-between items-center self-stretch border-rd-3 bg-[#000] text-[#FFF] m-2"
    >下一步</button
  >
  {#if responseMessage}
    <p class="text-red">{responseMessage}</p>
  {/if}
</form>

<style>
</style>
