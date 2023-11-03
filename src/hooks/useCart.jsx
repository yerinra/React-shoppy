import {
  addOrUpdateCartItem,
  getCart,
  removeCartItem,
  pay,
} from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export default function useCart() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();

  const cartQuery = useQuery({
    queryKey: ["cart", uid || ""],
    queryFn: () => getCart(uid),
    enabled: !!uid,
  });

  const addOrUpdateItem = useMutation({
    mutationFn: (product) => addOrUpdateCartItem(uid, product),
    onSuccess: () => {
      queryClient.invalidateQueries(["carts", uid]);
    },
  });

  const removeItem = useMutation({
    mutationFn: ({ id }) => removeCartItem(uid, id),

    onSuccess: () => queryClient.invalidateQueries(["carts", uid]),
  });

  const payCart = useMutation({
    mutationFn: () => pay(uid),

    onSuccess: () => queryClient.invalidateQueries(["carts", uid]),
  });

  return { cartQuery, addOrUpdateItem, removeItem, payCart };
}
