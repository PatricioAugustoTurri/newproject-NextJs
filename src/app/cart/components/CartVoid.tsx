import { useRouter } from "next/navigation";

function CartVoid() {
  const router = useRouter();
  return (
    <div className="text-center gap-4 flex flex-col mt-40">
      <h1 className="text-2xl font-bold">Tu carrito esta vacio</h1>
      <div>
        <p>Agrega algun producto a tu carrito,</p>
        <p
          onClick={() => {
            router.push("/shop");
          }}
          className="cursor-pointer text-blue-600"
        >
          para verlo aqui!!!
        </p>
      </div>
    </div>
  );
}

export default CartVoid;
