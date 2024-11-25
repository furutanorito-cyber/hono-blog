import { useRef } from "hono/jsx";

export default function DeleteButton({ articleId }: { articleId: string }) {
	const dialogRef = useRef<HTMLDialogElement | null>(null);

	const handleClickDelete = () => {
		dialogRef.current?.showModal();
	};

	return (
		<>
			<dialog ref={dialogRef} class={"modal"}>
				<form
					action={`/articles/${articleId}/delete`}
					method="post"
					class={"modal-box space-y-4"}
				>
					<p>この記事を削除していいですか？</p>
					<div class={"flex flex-row-reverse gap-3"}>
						<button type="submit" class={"btn btn-accent join-item"}>
							削除
						</button>
						<button
							value="cancel"
							formmethod="dialog"
							type="submit"
							class={"btn btn-secondary join-item"}
						>
							キャンセル
						</button>
					</div>
				</form>
			</dialog>

			{/* 
				記事一覧のカードに表示されるボタン
			*/}
			<div class={"flex flex-row-reverse"}>
				<button
					type="button"
					class={"btn btn-accent"}
					onClick={handleClickDelete}
				>
					削除
				</button>
			</div>
		</>
	);
}
