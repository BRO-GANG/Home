export default {
  fetch(request, env) {
    return new Response(
      JSON.stringify({
        status: "OK",
        message: "BRO GANG backend is LIVE 🔥",
        env: env.ENV
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  }
};
