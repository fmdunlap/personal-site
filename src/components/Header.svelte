<script lang="ts">
    
    type Breadcrumb = {
        name: string;
        href: string;
    }

    export let breadcrumbs: Array<Breadcrumb> = [];
</script>

<div class="grow flex bg-white mx-auto text-center rounded-md py-2 shadow-lg">
    <svg viewBox="0 0 110 30" xmlns="http://www.w3.org/2000/svg" class="my-auto px-4 w-32">
        <style>
            .heavy {
                font: bold 20px monospace;
            }
        </style>
        <text x="0" y="22" class="heavy">&lt; FDIV /&gt;</text>
    </svg>
    <p>|</p>
    <div class="px-4 flex flex-row">
        {#each breadcrumbs as breadcrumb, index}
            {#if index < breadcrumbs.length - 1}
                <a href={breadcrumb.href} class="text-emerald-600 hover:underline">{breadcrumb.name}</a>
                <p class="px-2"> > </p>
            {:else}
                <a href={breadcrumb.href} class="text-emerald-600 hover:underline font-bold">{breadcrumb.name}</a>
            {/if}
        {/each}
    </div>
</div>