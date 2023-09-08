import { Notify } from "quasar";

const _notify = ({
  message,
  color = "positive",
  position = "center",
  data_cy = "success",
}) => {
  Notify.create({
    message: message,
    color: color,
    position: position,
    attrs: {
      data_cy: data_cy,
    },
  });
};

export { _notify };
